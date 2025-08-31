# 🚀 Snippet Code

A personal code snippet library and manager designed to save and showcase coding templates. This application provides a clean and efficient way to store, find, and reuse code for various programming challenges.

## 📝 Description

This repository serves as a personal library for reusable code snippets, with a focus on clean, efficient, and well-documented code. While the snippets themselves might be for languages like C++, the application itself is a modern web app built to manage these templates effectively. It highlights a commitment to best practices in both code quality and modular design.

## ✨ Features

* **Snippet Management:** Easily add, edit, and delete your code snippets.
* **User-Friendly Interface:** A clean and intuitive UI to browse and manage your code.
* **Search & Filter:** Quickly find the snippet you need by title, language, or tags.
* **Syntax Highlighting:** Clear and readable code rendering for various languages.
* **Organize with Categories:** Group snippets by language, framework, or function for better organization.
* **Responsive Design:** Access and manage your snippets on any device, desktop or mobile.

## 💻 Tech Stack

This project is built with a modern, full-stack TypeScript setup:

* **Framework:** [Next.js](https://nextjs.org/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **ORM:** [Prisma](https://www.prisma.io/)
* **UI Components:** [Shadcn/UI](https://ui.shadcn.com/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### ✅ Prerequisites

* Node.js (v18 or later)
* npm or yarn
* A database provider (e.g., PostgreSQL, MySQL) supported by Prisma.

### 🛠️ Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/tushar591/Snippet-Code.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd Snippet-Code
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```
4.  **Set up your environment variables:**
    Create a `.env` file in the root of your project and add your database connection string:
    ```env
    DATABASE_URL="your_database_connection_string"
    ```
5.  **Run database migrations:**
    This will sync your database schema with the Prisma schema file.
    ```sh
    npx prisma migrate dev
    ```
6.  **Start the development server:**
    ```sh
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 💡 Usage

Once the application is running, you can start adding your own code snippets. Use the interface to create new entries, assign a language for proper syntax highlighting, and add tags for easy filtering. You can browse the existing collection and use the search bar to quickly find the code you need.

## 🙏 Contributing

Contributions are welcome! If you have ideas for new features or improvements, feel free to fork the repository and create a pull request.

1.  Fork the Project 🍴
2.  Create your Feature Branch (`git checkout -b feature/NewSnippetFeature`)
3.  Commit your Changes (`git commit -m 'Add some NewSnippetFeature'`)
4.  Push to the Branch (`git push origin feature/NewSnippetFeature`)
5.  Open a Pull Request 📬
