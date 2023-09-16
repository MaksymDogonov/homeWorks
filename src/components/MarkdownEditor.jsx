import React from "react"
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

class MarkdownEditor extends React.Component {

    constructor(props) {
        super(props);
        this.editorRef = React.createRef();
        this.editor = null
    }

    componentDidMount() {
        this.editor = new Editor({
            el: this.editorRef.current,
            hideModeSwitch: true,
        });
    };

    componentWillUnmount() {
        if (this.editor) {
            this.editor.destroy();
        }
    }

    render = () => (<div ref={this.editorRef}/>);
}

export default MarkdownEditor;
