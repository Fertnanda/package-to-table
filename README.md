# XML to CSV Converter

## Overview

This project is a web-based application designed to transform XML files into CSV format. The primary goal is to provide users with a simple interface to upload their XML files and download the resulting CSV files. The logic behind the conversion uses **DOM Parsing** to extract the values of each node within the XML document.

---

## Features

- **File Upload**: Accepts XML files for conversion.
- **DOM Parsing**: Utilizes DOM parsing techniques to navigate and extract data from XML nodes.
- **CSV Export**: Converts the extracted data into a CSV file and provides a download link.
- **User-Friendly Interface**: A clean and straightforward interface to facilitate ease of use.

---

## How It Works

1. **File Upload**: The user uploads an XML file via the web interface.
2. **DOM Parsing**:
   - The XML file is parsed using the DOM parsing method.
   - Each node and its values are located recursively.
   - Data is extracted and structured into rows for CSV.
3. **CSV Generation**:
   - Extracted data is formatted into CSV.
   - The user can download the file via a button click.
4. **Error Handling**:
   - Validation ensures the uploaded file is a valid XML.
   - Errors in parsing or file generation are reported to the user.
  


































# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
