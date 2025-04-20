function editorInit() {
    // Color palette
    colors = require('../editor/palette.js');

    // Required definitions
    const editor = require('../editor/src/ckeditor.js');
    const editorLang = require('../editor/src/translations/' + config.lang + ".js");
    let editplace;

    editor
        .create( document.querySelector( '.document-editor__editable' ), {
            highlight: {
                options: [
                    {
                        model: 'yellowMarker',
                        class: 'marker-yellow',
                        title: lang.colors.markers.yellow,
                        color: 'var(--ck-highlight-marker-yellow)',
                        type: 'marker'
                    },
                    {
                        model: 'greenMarker',
                        class: 'marker-green',
                        title: lang.colors.markers.green,
                        color: 'var(--ck-highlight-marker-green)',
                        type: 'marker'
                    },
                    {
                        model: 'pinkMarker',
                        class: 'marker-pink',
                        title: lang.colors.markers.pink,
                        color: 'var(--ck-highlight-marker-pink)',
                        type: 'marker'
                    },
                    {
                        model: 'blueMarker',
                        class: 'marker-blue',
                        title: lang.colors.markers.blue,
                        color: 'var(--ck-highlight-marker-blue)',
                        type: 'marker'
                    },
                    {
                        model: 'redPen',
                        class: 'pen-red',
                        title: lang.colors.pens.red,
                        color: 'var(--ck-highlight-pen-red)',
                        type: 'pen'
                    },
                    {
                        model: 'greenPen',
                        class: 'pen-green',
                        title: lang.colors.pens.green,
                        color: 'var(--ck-highlight-pen-green)',
                        type: 'pen'
                    }
                ]
            },
            fontFamily: {
                options: SystemFonts
            },
            fontSize: {
                options: [
                    5,
                    9,
                    10,
                    11,
                    12,
                    'default',
                    14,
                    18,
                    20,
                    24,
                    36,
                    48,
                ]
            },
            toolbar: [ 'undo', 'redo', '|', 'removeFormat', '|', 'heading', '|', 'fontFamily', 'fontSize', 'fontColor', 'fontBackgroundColor', 'alignment', '|', 'bold', 'italic', 'underline', 'strikethrough', '|', 'subscript', 'superscript', '|', 'code', '|', 'outdent', 'indent', '|', 'bulletedList', 'numberedList', 'todoList', '|', 'link', 'imageUpload', 'mediaEmbed', 'blockQuote', 'insertTable', 'codeBlock', '|', 'pageBreak', 'horizontalLine' ],
            fontColor: {
                colors: colors,
                columns: 9
            },
            fontBackgroundColor: {
                colors: colors,
                columns: 9
            },
            typing: {
                transformations: {
                    extra: [
                        { from: ':)', to: '🙂' },
                        { from: ':D', to: '😁' },
                        { from: ';)', to: '😂' },
                        { from: ';D', to: '🤣' },
                        { from: ':3', to: '😗' },
                        { from: ';3', to: '😙' },
                        { from: ':B', to: '😗' },
                        { from: ';B', to: '😙' },
                        { from: ':b', to: '😛' },
                        { from: ':p', to: '😛' },
                        { from: ':d', to: '😛' },
                        { from: ';b', to: '😝' },
                        { from: ';p', to: '😝' },
                        { from: ';d', to: '😝' },
                        { from: '-_-', to: '😑' },
                        { from: ':(', to: '🙁' },
                        { from: ':|', to: '😐' },
                        { from: ':l', to: '😐' },
                        { from: ':I', to: '😐' },
                        { from: ':O', to: '😮' },
                        { from: ':o', to: '😯' },
                        { from: ';x', to: '😖' },
                        { from: '^:)', to: '😺' },
                        { from: '^;)', to: '😸' },
                        { from: '^:p', to: '😼' },
                        { from: '^:b', to: '😼' },
                        { from: '^:d', to: '😼' },
                        { from: '^:o', to: '🙀' },
                        { from: '^:O', to: '🙀' },
                        { from: '^:(', to: '😾' },
                        { from: '<3', to: '❤' },
                        { from: ':ComeBackLittleRedShit:', to: '🌶' },
                        { from: ':SUSHI!!!ILoveSushi!!!:', to: '🍣' },
                        { from: ':GalaxyTrail:', to: '🌀' },
                        {
                            from: /(^|\s)(")([^"]*)(")$/,
                            to: [ null, '« ', null, ' »' ]
                        }
                    ],
                }
            },
            codeBlock: {
                languages: [
                    { language: 'raw', label: lang.editor.cbplain },
                    { language: 'c', label: 'C' },
                    { language: 'cs', label: 'C#' },
                    { language: 'cpp', label: 'C++' },
                    { language: 'cfs', label: 'CoffeeScript' },
                    { language: 'conf', label: 'Config' },
                    { language: 'cson', label: 'CSON' },
                    { language: 'css', label: 'CSS' },
                    { language: 'gitignore', label: 'GitIgnore' },
                    { language: 'html', label: 'HTML' },
                    { language: 'inf', label: 'INF' },
                    { language: 'ini', label: 'INI' },
                    { language: 'java', label: 'Java' },
                    { language: 'javascript', label: 'JavaScript' },
                    { language: 'jp', label: 'Java Properties' },
                    { language: 'json', label: 'JSON' },
                    { language: 'lua', label: 'Lua' },
                    { language: 'make', label: 'Makefile' },
                    { language: 'md', label: 'Markdown' },
                    { language: 'objc', label: 'Objective C' },
                    { language: 'objcpp', label: 'Objective C++' },
                    { language: 'ps', label: 'PowerShell' },
                    { language: 'p', label: 'Perl' },
                    { language: 'py', label: 'Python' },
                    { language: 'php', label: 'PHP' },
                    { language: 'ruby', label: 'Ruby' },
                    { language: 'sass', label: 'Sass' },
                    { language: 'scss', label: 'SCSS' },
                    { language: 'scss', label: 'SCSS' },
                    { language: 'sh', label: 'Shell Script' },
                    { language: 'sql', label: 'SQL' },
                    { language: 'ts', label: 'TypeScript' },
                    { language: 'bat', label: 'Windows Batch' },
                    { language: 'xml', label: 'XML' },
                    { language: 'xsl', label: 'XSL' },
                    { language: 'yml', label: 'YAML' },
                ]
            },
            heading: {
                options: [
                    { model: 'paragraph', title: lang.styles.paragraph, class: 'ck-heading_paragraph' },
                    { model: 'spanelement', view: 'pwspe', title: lang.styles.inline, class: 'pwrite-spanelement' },
                    { model: 'heading1', view: 'h1', title: lang.styles.h1, class: 'ck-heading_heading1' },
                    { model: 'heading2', view: 'h2', title: lang.styles.h2, class: 'ck-heading_heading2' },
                    { model: 'heading3', view: 'h3', title: lang.styles.h3, class: 'ck-heading_heading3' },
                    { model: 'heading4', view: 'h4', title: lang.styles.h4, class: 'ck-heading_heading4' },
                    { model: 'smallcaps', view: { name: "p", classes: 'pwrite-caps' }, title: lang.styles.caps, class: 'pwrite-caps' },
                ]
            },
            table: {
                contentToolbar: [ 'tableColumn', 'tableRow', '|', 'mergeTableCells' ]
            },
            language: config.lang,
        } )
        .then( editor => {
            global.editplace = editor;
            const toolbarContainer = document.querySelector( '.document-editor__toolbar' );

            toolbarContainer.appendChild( editor.ui.view.toolbar.element );

            window.editor = editor;
        } )
        .catch( error => {
            console.log( error );
        } );
}

const locks = {
    lock: () => {
        editplace.isReadOnly = true;
    },
    unlock: () => {
        editplace.isReadOnly = false;
    },
    toggle: () => {
        editplace.isReadOnly = !editplace.isReadOnly;
    }
}
