# Flow Builder Application

A **Next.js + ReactFlow** based chatbot flow builder with drag-and-drop functionality and real-time editing.

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # UI components
│   ├── nodes/CustomNode.tsx
│   ├── FlowToolbar.tsx
│   ├── FlowSidebar.tsx
│   ├── MessageEditor.tsx
│   └── NodeCreator.tsx
├── contexts/FlowContext.tsx
├── lib/                 # Utilities & types
│   ├── flowUtils.ts
│   ├── toastUtils.ts
│   └── types.ts
└── public/
```

## ✨ Features

- Drag & drop **message nodes**
- Connect nodes visually with validation
- Edit node messages in real-time
- Save & load flows from **localStorage**
- Clean, professional UI with TypeScript support

## 🛠️ Tech Stack

- **Next.js 14** + React 18
- **ReactFlow** for flow diagrams
- **Tailwind CSS** for styling
- **React Hot Toast** for notifications

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build
```

## 🎥 Video Demo

<video src="assets/Screen%20Recording%202025-08-19%20at%2012.06.38%E2%80%AFAM.mov" controls width="700"></video>

## 🔮 Future Enhancements

- Multiple node types
- Import/export flows
- Undo/redo support
- Cloud sync & collaboration

## 📄 License

MIT License © [Your Name]
