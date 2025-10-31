// Import React hooks
import React, { useEffect, useRef } from "react";

// Import core CodeMirror state management
import { EditorState } from "@codemirror/state";

// Import editor view + helper extensions
import { EditorView, keymap, highlightActiveLine, lineNumbers } from "@codemirror/view";

// Import key bindings + undo/redo history
import { defaultKeymap, history, historyKeymap } from "@codemirror/commands";

// Import JavaScript language support
import { javascript } from "@codemirror/lang-javascript";

// Import a dark theme
import { oneDark } from "@codemirror/theme-one-dark";

// ✅ Import auto-closing brackets support
import { closeBrackets, closeBracketsKeymap } from "@codemirror/autocomplete";

const Editor = () => {
  // Create a reference to attach the editor to a div
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) return;

    // Create the initial editor state (content + extensions)
    const startState = EditorState.create({
      doc: "// Start coding here...\nconsole.log('Hello, CodeMirror 6!');",

      extensions: [
        lineNumbers(), // ✅ show line numbers
        keymap.of([...defaultKeymap, ...historyKeymap, ...closeBracketsKeymap]), // key bindings
        history(), // undo/redo
        javascript(), // syntax highlighting
        oneDark, // dark theme
        highlightActiveLine(), // highlight current line
        EditorView.lineWrapping, // wrap long lines
        closeBrackets(), // ✅ auto-close (), {}, []
      ],
    });

    // Create the actual editor view inside the div
    const view = new EditorView({
      state: startState,
      parent: editorRef.current,
    });

    // Cleanup function when component unmounts
    return () => view.destroy();
  }, []);

  // Return the container where editor will appear
  return (
    <div className="bg-gray-900 text-white p-4">
      {/* This div will hold the CodeMirror editor */}
      <div ref={editorRef} className="border border-gray-700 rounded-lg h-full" />
    </div>
  );
};

export default Editor;
