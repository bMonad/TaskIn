# TaskIn

TaskIn is a modern, interactive task management application built with **React** and **Vite**. It helps you organize, prioritize, and manage your tasks efficiently with a beautiful and intuitive UI.

## Features

- **CRUD Operations on Tasks**

  - Create new tasks with details.
  - View all your tasks organized in columns.
  - Edit task details, including title, description, and tags.
  - Delete tasks you no longer need.

- **Tagging System**

  - Add one or more tags to each task for easy categorization.
  - Filter or visually group tasks by their tags.

- **Drag & Drop Functionality**

  - Move tasks between columns (e.g., To Do, In Progress, Done) using drag & drop.
  - Reorder tasks within a column by dragging.

- **Responsive & Fast**
  - Built with Vite for instant hot reloads and fast builds.
  - Responsive design for desktop and mobile.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/bMonad/TaskIn.git
   cd TaskIn
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

## Usage

- **Add Task:** Use the input form to create a new task. Fill in the title, description, and assign tags.
- **Edit Task:** Click the edit icon/button on a task card to modify its details or tags.
- **Delete Task:** Remove a task by clicking the delete icon/button on the task card.
- **Tag Tasks:** Assign tags when creating or editing a task to group related items.
- **Drag & Drop:** Click and drag tasks to reorder them within a column or move them between columns.

## Project Structure

- `src/`
  - `components/` — UI components (Button, TaskCard, TaskColumn, etc.)
  - `constants/` — Constants used throughout the app
  - `pages/` — Main page layouts (Header, Main, etc.)
  - `styles/` — CSS files for styling components
  - `assets/` — Static assets (images, icons, etc.)
  - `App.jsx` — Main application component
  - `main.jsx` — Entry point

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements, new features, or bug fixes.

## License

This project is licensed under the MIT License.

---

Built with ❤️ using React and Vite.
