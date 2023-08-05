const ATTRIBUTES = {
    dataUserId: 'data-user-id',
    dataRemoveBtn: 'data-remove-btn',
    dataCallBtn: 'data-call-btn',
    dataEndCallBtn: 'data-end-call-btn'
};

class PhoneBook {
    #contacts = [];
    #searchedUsers = [];
    #modal = null;

    constructor(users, listSelector) {
        this.list = document.querySelector(listSelector);
        this.listUl = this.list.querySelector('ul');

        this.#modal = new bootstrap.Modal('#exampleModal', {
            keyboard: false,
            backdrop: 'static'
        });

        this.callDurationEl = this.#modal._element.querySelector('.modal-title .duration');
        this.#setEvents();

        users.forEach(it => {
            this.addContact(it);
        });
    }

    addContact(user) {
        if (user.id === null) return;

        const userContract = new User(user);
        userContract.template = this.createContactTemplate(userContract);

        this.#contacts.push(userContract);
        this.listUl.prepend(this.#contacts.at(-1).template);
    }

    call(contactId) {
        const contact = this.#contacts.find(({ id }) => id === contactId);

        this.#modal._element.querySelector('.modal-title .title').innerHTML = contact.name;
        this.#modal._element.querySelector('.modal-body').innerHTML = 'Conversation with ' + contact.phone;
        this.#modal.show();

        callController.startCall(contact);
    }

    removeContact(contactId) {
        const contactIndex = this.#contacts.findIndex(({ id }) => id === contactId);
        this.#contacts[contactIndex].template.remove();
        this.#contacts.splice(contactIndex, 1);
    }

    search(searchTerm) {
        this.#searchedUsers = this.#contacts.filter(contact => (
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.phone.includes(searchTerm) ||
            contact.email.toLowerCase().includes(searchTerm.toLowerCase())
        ));
        this.listUl.innerHTML = '';

        this.#searchedUsers.forEach(contact => {
            this.listUl.appendChild(contact.template);
        });
    }

    #removeHandler = (e) => {
        const { target } = e;
        e.stopPropagation();
        if (!target.closest(`[${ATTRIBUTES.dataRemoveBtn}]`)?.hasAttribute(ATTRIBUTES.dataRemoveBtn)) return;
        const userId = +target.closest(`[${ATTRIBUTES.dataUserId}]`).getAttribute(ATTRIBUTES.dataUserId);
        this.removeContact(userId);
    };

    #callHandler = (e) => {
        const { target } = e;
        e.stopPropagation();
        if (!target.closest(`[${ATTRIBUTES.dataCallBtn}]`)?.hasAttribute(ATTRIBUTES.dataCallBtn)) return;
        const userId = +target.closest(`[${ATTRIBUTES.dataUserId}]`).getAttribute(ATTRIBUTES.dataUserId);
        this.call(userId);
    };

    #endCall = () => {
        callController.endCall();
        this.#modal.hide();
        this.callDurationEl.innerHTML = '00:00';
    };

    #trackCallStatus = (newStatus) => {
        if (!Call.endCallStatuses.includes(newStatus)) return;
        this.#endCall();
    };

    #trackCallDuration = (duration) => {
        this.callDurationEl.innerHTML = '00:0' + duration;
    };

    #setEvents() {
        Call.addSubscription(Call.EVENT_TYPES.changeStatus, this.#trackCallStatus);
        Call.addSubscription(Call.EVENT_TYPES.changeDuration, this.#trackCallDuration);

        this.list.addEventListener('click', this.#removeHandler);
        this.list.addEventListener('click', this.#callHandler);
        this.#modal._element.querySelector(`[${ATTRIBUTES.dataEndCallBtn}]`).addEventListener('click', this.#endCall);
    }

    createContactTemplate(user) {
        const wrapper = document.createElement('div');
        wrapper.className = 'list-group-item d-flex justify-content-between align-items-center';
        wrapper.setAttribute('data-user-id', user.id);

        wrapper.innerHTML = `<span class="contacts__contact">${user.name}</span>
                            <div> 
                                <button type="button" ${ATTRIBUTES.dataCallBtn} class="btn btn-success">
                                    <i class="bi bi-telephone"></i>
                                </button>

                                <button type="button" ${ATTRIBUTES.dataRemoveBtn} class="btn btn-danger">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>`;

        return wrapper;
    }
}

const phoneBook = new PhoneBook(users, '.contacts__list');

const searchInput = document.getElementById('contacts-search');

searchInput.addEventListener('input', event => {
    const searchQuery = event.target.value;
    phoneBook.search(searchQuery);
});