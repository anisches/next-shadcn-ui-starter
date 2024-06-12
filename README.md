# next-shad-tailwind

A boilerplate for creating Next.js projects with ShadCN UI, TailwindCSS, and ESLint.

## Features

- **Next.js**: The latest version of Next.js.
- **ShadCN UI**: Pre-integrated ShadCN UI components.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **ESLint**: Configured with Airbnb's style guide for consistent code quality.

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/next-shad-tailwind.git
    cd next-shad-tailwind
    ```

2. **Install dependencies**:

    ```bash
    pnpm 
    ```

3. **Run the development server**:

    ```bash
    pnpm dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

- Start developing by editing files in the `pages`, `components`, and `styles` directories.
- TailwindCSS is configured and ready to use in your CSS files.
- ShadCN UI components can be imported and used in your React components.

## Configuration

### TailwindCSS

TailwindCSS configuration is located in `tailwind.config.js`.

### ESLint

ESLint configuration is located in `.eslintrc.json`.

## Updating Dependencies

This project uses GitHub Actions to automatically update dependencies. The workflow file is located at `.github/workflows/update-dependencies.yml`.

## Contributing

Feel free to open issues or submit pull requests to help improve this boilerplate.

## License

This project is licensed under the MIT License.
