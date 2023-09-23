import React, { useEffect, useRef } from "react";
import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const MarkdownEditor = () => {
    const editorRef = useRef(null);
    let editor = null;

    useEffect(() => {
        editor = new Editor({
            el: editorRef.current,
            hideModeSwitch: true,
        });

        return () => {
            if (editor) {
                editor.destroy();
            }
        };
    }, []);

    return <div ref={editorRef} />;
};

export default MarkdownEditor;
