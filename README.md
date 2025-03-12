# JSON Placeholder Client

This is a client project built using [Vite](https://vitejs.dev/) and [React](https://reactjs.org/). It is designed to interact with the [JSON Placeholder API](https://jsonplaceholder.typicode.com/), providing a simple interface to retrieve and display data.

## Table of Contents
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Development](#development)
- [Building for Production](#building-for-production)
- [License](#license)


## Environment Variables

This project uses the following environment variables:

- `VITE_API_URL` - The base URL for the API. Update this to point to your desired API endpoint (default is `http://api.url`).
- `VITE_DEBUG` - A boolean to enable or disable debug mode (default is `true`).

These variables are stored in the `.env` file. Example:

```
VITE_API_URL="http://api.url"
VITE_DEBUG=true
```

## Installation

To get started with this project, clone it to your local machine and install the dependencies.

1. Clone the repository:

   ```bash
   git clone https://github.com/KorliakovDenys/json-placeholder-client.git
   ```

2. Navigate into the project directory:

   ```bash
   cd json-placeholder-client
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Development

To run the project in development mode, follow these steps:

1. Start the Vite development server:

   ```bash
   npm run dev
   ```

2. Open your browser and visit [http://localhost:5173](http://localhost:5173) to see the project in action.

The development server will automatically reload when you make changes to the source files.

## Building for Production

To create an optimized production build, use the following command:

```bash
npm run build
```

This will generate a `dist/` folder containing the compiled and minified files.

To preview the production build locally:

```bash
npm run preview
```

Visit [http://localhost:4173](http://localhost:4173) to preview the production version.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### This `README.md` covers:
- **Installation and setup** steps.
- How to run the app in **development mode**.
- How to build it for **production**.
- Explanation of **environment variables** like `VITE_API_URL` and `VITE_DEBUG`.
- Basic **folder structure** for clarity.
