monaco.languages.registerCompletionItemProvider('*', {
    provideCompletionItems: function (model, position) {
        const word = model.getWordUntilPosition(position);
        const range = {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn
        };

        let suggestions = [];

        // --- Gợi ý chung và Snippets cơ bản ---
        suggestions.push(
            {
                label: 'log',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: 'console.log(${1})',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
                documentation: 'Log a message to the console.'
            },
            {
                label: 'clg', // Thêm alias
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: 'console.log(${1})',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
                documentation: 'Log a message to the console.'
            },
            {
                label: 'function',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: 'function ${1:name}(${2:params}) {\n\t${3:// code}\n}',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
                documentation: 'Define a named function.'
            },
            {
                label: 'arrowFunction',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: '(${1:params}) => {\n\t${2:// code}\n}',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
                documentation: 'Define an arrow function.'
            },
            {
                label: 'if',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: 'if (${1:condition}) {\n\t${2:// code}\n}',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
                documentation: 'If statement.'
            },
            {
                label: 'ife', // if-else
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: 'if (${1:condition}) {\n\t${2:// code}\n} else {\n\t${3:// else code}\n}',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
                documentation: 'If-else statement.'
            },
            {
                label: 'for',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: 'for (let ${1:i} = 0; ${1:i} < ${2:array}.length; ${1:i}++) {\n\t${3:// code}\n}',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
                documentation: 'Standard for loop.'
            },
            {
                label: 'forEach',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: '${1:array}.forEach(${2:item} => {\n\t${3:// code}\n});',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
                documentation: 'Array forEach loop.'
            },
            {
                label: 'forOf',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: 'for (const ${1:item} of ${2:iterable}) {\n\t${3:// code}\n}',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
                documentation: 'For...of loop.'
            },
            {
                label: 'forIn',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: 'for (const ${1:key} in ${2:object}) {\n\t${3:// code}\n}',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
                documentation: 'For...in loop (for object properties).'
            },
            {
                label: 'while',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: 'while (${1:condition}) {\n\t${2:// code}\n}',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
                documentation: 'While loop.'
            },
            {
                label: 'doWhile',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: 'do {\n\t${1:// code}\n} while (${2:condition});',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
                documentation: 'Do-while loop.'
            },
            {
                label: 'class',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: 'class ${1:ClassName} {\n\tconstructor(${2:params}) {\n\t\t${3:// constructor code}\n\t}\n\n\t${4:methodName}(${5:args}) {\n\t\t${6:// method code}\n\t}\n}',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
                documentation: 'Define a class.'
            },
            {
                label: 'tryCatch',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: 'try {\n\t${1:// code}\n} catch (${2:error}) {\n\t${3:// error handling}\n}',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
                documentation: 'Try-catch block for error handling.'
            },
            {
                label: 'setTimeout',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: 'setTimeout(() => {\n\t${1:// code}\n}, ${2:delayInMilliseconds});',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
                documentation: 'Execute code after a delay.'
            },
            {
                label: 'setInterval',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: 'setInterval(() => {\n\t${1:// code}\n}, ${2:intervalInMilliseconds});',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
                documentation: 'Execute code repeatedly at an interval.'
            },
            {
                label: 'templateString',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: '`${1:string literal}`',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
                documentation: 'Template string (backticks).'
            },
            {
                label: 'import',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: 'import ${1:module} from \'${2:path}\';',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
                documentation: 'Import a module.'
            },
            {
                label: 'export',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: 'export ${1:const} ${2:name} = ${3:value};',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
                documentation: 'Export a variable or function.'
            }
        );

        // --- Gợi ý khai báo biến ---
        suggestions.push(
            {
                label: 'let',
                kind: monaco.languages.CompletionItemKind.Keyword,
                insertText: 'let ${1:name} = ${2:value};',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
                documentation: 'Declare a block-scoped local variable.'
            },
            {
                label: 'const',
                kind: monaco.languages.CompletionItemKind.Keyword,
                insertText: 'const ${1:name} = ${2:value};',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
                documentation: 'Declare a block-scoped, read-only named constant.'
            },
            {
                label: 'var',
                kind: monaco.languages.CompletionItemKind.Keyword,
                insertText: 'var ${1:name} = ${2:value};',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
                documentation: 'Declare a variable (function-scoped).'
            }
        );

        // --- Gợi ý cho các đối tượng Global và Built-in (nếu ngôn ngữ là JavaScript) ---
        // Bạn có thể kiểm tra ngôn ngữ hiện tại: model.getLanguageIdentifier().language === 'javascript'
        // Tuy nhiên, vì registerCompletionItemProvider đang dùng '*', nên sẽ áp dụng cho tất cả.
        // Để linh hoạt hơn, có thể thêm kiểm tra ngôn ngữ nếu bạn chỉ muốn gợi ý này cho JS.

        const jsBuiltIns = [
            { label: 'console', kind: monaco.languages.CompletionItemKind.Module, documentation: 'The console object provides access to the browser\'s debugging console.' },
            { label: 'Math', kind: monaco.languages.CompletionItemKind.Module, documentation: 'The Math object allows you to perform mathematical tasks.' },
            { label: 'Date', kind: monaco.languages.CompletionItemKind.Class, documentation: 'The Date object is used to work with dates and times.' },
            { label: 'JSON', kind: monaco.languages.CompletionItemKind.Module, documentation: 'The JSON object contains methods for parsing and stringifying JSON.' },
            { label: 'Array', kind: monaco.languages.CompletionItemKind.Class, documentation: 'The Array object, used to create and manipulate arrays.' },
            { label: 'String', kind: monaco.languages.CompletionItemKind.Class, documentation: 'The String object, used to create and manipulate strings.' },
            { label: 'Object', kind: monaco.languages.CompletionItemKind.Class, documentation: 'The Object object, the base for all JavaScript objects.' },
            { label: 'Number', kind: monaco.languages.CompletionItemKind.Class, documentation: 'The Number object, a wrapper object allowing you to work with numerical values.' },
            { label: 'Boolean', kind: monaco.languages.CompletionItemKind.Class, documentation: 'The Boolean object, a wrapper object allowing you to work with boolean values.' },
            { label: 'Promise', kind: monaco.languages.CompletionItemKind.Class, documentation: 'The Promise object represents the eventual completion (or failure) of an asynchronous operation.' },
            { label: 'fetch', kind: monaco.languages.CompletionItemKind.Function, documentation: 'The Fetch API provides an interface for fetching resources (including across the network).' },
            { label: 'setTimeout', kind: monaco.languages.CompletionItemKind.Function, documentation: 'Sets a timer which executes a function or specified piece of code once the timer expires.' },
            { label: 'setInterval', kind: monaco.languages.CompletionItemKind.Function, documentation: 'Repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.' },
            { label: 'clearTimeout', kind: monaco.languages.CompletionItemKind.Function, documentation: 'Clears a timer set with setTimeout().' },
            { label: 'clearInterval', kind: monaco.languages.CompletionItemKind.Function, documentation: 'Clears a timer set with setInterval().' },
            { label: 'NaN', kind: monaco.languages.CompletionItemKind.Constant, documentation: 'Not-A-Number. A property of the global object.' },
            { label: 'Infinity', kind: monaco.languages.CompletionItemKind.Constant, documentation: 'A property of the global object that represents positive infinity.' },
            { label: 'undefined', kind: monaco.languages.CompletionItemKind.Constant, documentation: 'A property of the global object that represents the primitive value undefined.' },
            { label: 'null', kind: monaco.languages.CompletionItemKind.Constant, documentation: 'The value null represents the intentional absence of any object value.' },
            { label: 'true', kind: monaco.languages.CompletionItemKind.Constant, documentation: 'The boolean value true.' },
            { label: 'false', kind: monaco.languages.CompletionItemKind.Constant, documentation: 'The boolean value false.' },
        ];

        jsBuiltIns.forEach(item => {
            suggestions.push({
                label: item.label,
                kind: item.kind,
                insertText: item.label,
                range: range,
                documentation: item.documentation
            });
        });

        // --- Gợi ý thông minh dựa trên từ khóa người dùng đang gõ ---
        const currentWord = word.word.toLowerCase();

        // Gợi ý cho các phương thức của console
        if (currentWord.startsWith('con')) {
            suggestions.push(
                { label: 'console.log', kind: monaco.languages.CompletionItemKind.Method, insertText: 'console.log(${1})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, range: range, documentation: 'Logs a message to the console.' },
                { label: 'console.warn', kind: monaco.languages.CompletionItemKind.Method, insertText: 'console.warn(${1})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, range: range, documentation: 'Outputs a warning message to the console.' },
                { label: 'console.error', kind: monaco.languages.CompletionItemKind.Method, insertText: 'console.error(${1})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, range: range, documentation: 'Outputs an error message to the console.' },
                { label: 'console.info', kind: monaco.languages.CompletionItemKind.Method, insertText: 'console.info(${1})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, range: range, documentation: 'Outputs an informational message to the console.' },
                { label: 'console.debug', kind: monaco.languages.CompletionItemKind.Method, insertText: 'console.debug(${1})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, range: range, documentation: 'Outputs a debugging message to the console.' }
            );
        }

        // Gợi ý cho Array methods (ví dụ: nếu gõ 'arr.')
        // Logic này cần được cải thiện để thực sự biết được biến là Array.
        // Đây là ví dụ đơn giản dựa trên từ khóa chung.
        if (currentWord.includes('array') || currentWord.includes('arr')) {
             suggestions.push(
                { label: 'map', kind: monaco.languages.CompletionItemKind.Method, insertText: 'map(${1:item} => ${2:item})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, range: range, documentation: 'Creates a new array with the results of calling a provided function on every element in the calling array.' },
                { label: 'filter', kind: monaco.languages.CompletionItemKind.Method, insertText: 'filter(${1:item} => ${2:condition})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, range: range, documentation: 'Creates a new array with all elements that pass the test implemented by the provided function.' },
                { label: 'reduce', kind: monaco.languages.CompletionItemKind.Method, insertText: 'reduce((${1:accumulator}, ${2:currentValue}) => ${3:accumulator} + ${2:currentValue}, ${4:initialValue})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, range: range, documentation: 'Executes a reducer function on each element of the array, resulting in a single output value.' },
                { label: 'push', kind: monaco.languages.CompletionItemKind.Method, insertText: 'push(${1:element})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, range: range, documentation: 'Adds one or more elements to the end of an array.' },
                { label: 'pop', kind: monaco.languages.CompletionItemKind.Method, insertText: 'pop()', range: range, documentation: 'Removes the last element from an array.' },
                { label: 'length', kind: monaco.languages.CompletionItemKind.Property, insertText: 'length', range: range, documentation: 'Returns the number of elements in an array.' }
             );
        }


        // Kiểm tra nếu đang ở trong một hàm hoặc sau từ khóa 'function'
        const lineContent = model.getLineContent(position.lineNumber);
        if (lineContent.includes('function') || lineContent.includes('=>')) {
            suggestions.push({
                label: 'return',
                kind: monaco.languages.CompletionItemKind.Keyword,
                insertText: 'return ${1:value};',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
                documentation: 'Exits a function and returns a value.'
            });
        }

        return { suggestions: suggestions };
    }
});
