Sure! Here's the complete README.md file with all the commands for a tech-crm-ui, including development, testing, building, folder structure, contributing, and license information:

## tech-crm-ui

This is a starter project for building web applications using tech-crm-ui, TypeScript, and React.

## Getting Started

## Prerequisites

Make sure you have the following tools installed on your system:

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1 or higher)

## Installation

```bash
git clone https://gitlab.com/technosys4/mirainform/tech-crm-ui.git
cd tech-crm-ui

# If you use npm:
npm install

# If you use yarn:
yarn install
```

## Development

To start the development server and run the project locally, use the following command:

```bash
npm run dev
```

or

```bash
yarn dev
```

This will open the development server at `http://localhost:3000` by default.

## Building for Production

To build the project for production, run:

```bash
npm run build
```

or

```bash
yarn build
```

The optimized production-ready files will be generated in the `dist` directory.

## Testing

This starter project comes with a basic setup for testing using Jest and React Testing Library. To run the tests, use the following command:

```bash
npm run test
```

or

```bash
yarn test
```

## Folder Structure

Here's a brief overview of the project's folder structure:

```
tech-crm-ui
├─ .gitignore
├─ .vite
│  └─ deps_temp_2095e6ac
│     └─ package.json
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ css
│  │  │  ├─ custom-style.scss
│  │  │  └─ global.scss
│  │  ├─ icons
│  │  │  ├─ font-awesome
│  │  │  │  └─ webfonts
│  │  │  │     ├─ fa-brands-400.eot
│  │  │  │     ├─ fa-brands-400.svg
│  │  │  │     ├─ fa-brands-400.woff
│  │  │  │     ├─ fa-brands-400.woff2
│  │  │  │     ├─ fa-regular-400.eot
│  │  │  │     ├─ fa-regular-400.svg
│  │  │  │     ├─ fa-regular-400.ttf
│  │  │  │     ├─ fa-regular-400.woff
│  │  │  │     ├─ fa-regular-400.woff2
│  │  │  │     ├─ fa-solid-900.eot
│  │  │  │     ├─ fa-solid-900.svg
│  │  │  │     ├─ fa-solid-900.ttf
│  │  │  │     ├─ fa-solid-900.woff
│  │  │  │     └─ fa-solid-900.woff2
│  │  │  ├─ global.woff
│  │  │  ├─ material-design-iconic-font
│  │  │  │  ├─ materialdesignicons-webfont.eot
│  │  │  │  ├─ materialdesignicons-webfont.svg
│  │  │  │  ├─ materialdesignicons-webfont.ttf
│  │  │  │  ├─ materialdesignicons-webfont.woff
│  │  │  │  └─ materialdesignicons-webfont.woff2
│  │  │  ├─ themify.eot
│  │  │  ├─ themify.svg
│  │  │  ├─ themify.ttf
│  │  │  └─ themify.woff
│  │  └─ images
│  │     ├─ 2.jpg
│  │     ├─ auth-bg.jpg
│  │     ├─ favicon.png
│  │     └─ logo.png
│  ├─ constants
│  │  ├─ index.ts
│  │  └─ route-constants.ts
│  ├─ context
│  │  ├─ AuthProvider.tsx
│  │  └─ index.ts
│  ├─ guards
│  │  ├─ auth
│  │  │  └─ RequireAuth.tsx
│  │  └─ index.ts
│  ├─ hooks
│  │  ├─ index.ts
│  │  ├─ useAuth.tsx
│  │  ├─ useAxios.tsx
│  │  ├─ useLocalStorage.tsx
│  │  ├─ useSessionStorage.tsx
│  │  └─ useUser.tsx
│  ├─ layout
│  │  ├─ HeaderLayout.tsx
│  │  ├─ index.ts
│  │  └─ MainLayout.tsx
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ auth
│  │  │  ├─ form-fildes
│  │  │  ├─ index.ts
│  │  │  ├─ Login.tsx
│  │  │  └─ types
│  │  │     └─ login-request.type.ts
│  │  ├─ dashboard
│  │  │  ├─ components
│  │  │  │  ├─ Greeting.tsx
│  │  │  │  └─ Stats.tsx
│  │  │  ├─ Dashboard.tsx
│  │  │  └─ index.ts
│  │  └─ master
│  │     ├─ client-master
│  │     │  ├─ Client.tsx
│  │     │  ├─ ClientGroup.tsx
│  │     │  ├─ ClientMasterIndex.tsx
│  │     │  └─ Segment.tsx
│  │     ├─ company-master
│  │     │  ├─ AddCompany.tsx
│  │     │  ├─ CompanyMaster.tsx
│  │     │  ├─ CompanyMasterIndex.tsx
│  │     │  └─ form-fields
│  │     │     └─ add-company.ts
│  │     ├─ index.ts
│  │     ├─ location-master
│  │     │  ├─ city
│  │     │  │  ├─ AddCity.tsx
│  │     │  │  ├─ City.tsx
│  │     │  │  └─ CityMasterIndex.tsx
│  │     │  ├─ form-fields
│  │     │  │  └─ add-city.ts
│  │     │  └─ LocationMasterIndex.tsx
│  │     └─ MasterRoutes.tsx
│  ├─ router
│  │  └─ AppRoutes.tsx
│  ├─ shared
│  │  ├─ components
│  │  │  ├─ error
│  │  │  │  └─ NotFound.tsx
│  │  │  └─ ui
│  │  │     ├─ ActionButtons.tsx
│  │  │     ├─ Border-layout.tsx
│  │  │     ├─ Button.tsx
│  │  │     ├─ Card.tsx
│  │  │     ├─ Checkbox.tsx
│  │  │     ├─ DatePicker.tsx
│  │  │     ├─ dev
│  │  │     │  ├─ Components.tsx
│  │  │     │  └─ form-fields.ts
│  │  │     ├─ Header.tsx
│  │  │     ├─ Image.tsx
│  │  │     ├─ Input.tsx
│  │  │     ├─ PageBreadcrumb.tsx
│  │  │     ├─ PageWrapper.tsx
│  │  │     ├─ Radio.tsx
│  │  │     ├─ Select.tsx
│  │  │     └─ Table.tsx
│  │  ├─ index.ts
│  │  └─ types
│  │     ├─ border-layout-types.ts
│  │     ├─ button-type.ts
│  │     ├─ card-type.ts
│  │     ├─ error-type.ts
│  │     ├─ forms-type
│  │     │  ├─ form-field.ts
│  │     │  ├─ max-leangth-type.ts
│  │     │  ├─ min-length-type.ts
│  │     │  ├─ options-type.ts
│  │     │  ├─ pattern-type.ts
│  │     │  └─ validations-type.ts
│  │     ├─ generic-type.ts
│  │     ├─ image-type.ts
│  │     └─ page-breadcrumb-type.ts
│  ├─ utils
│  │  ├─ createFormConfig.ts
│  │  ├─ findInputError.ts
│  │  ├─ index.ts
│  │  ├─ isFormInvalid.ts
│  │  ├─ selectOptionsMaker.ts
│  │  └─ titleCase.ts
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```

Feel free to customize this folder structure based on your specific needs.

## Contributing

If you'd like to contribute to this project, please follow the guidelines in [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

```

Replace "your-username" in the repository URL with your actual GitHub username if you plan to publish this project to your GitHub account. This README.md file provides a comprehensive overview of the project, including installation instructions, development, testing, building, folder structure, how to contribute, and the license information.
```
