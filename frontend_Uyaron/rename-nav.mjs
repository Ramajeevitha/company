import fs from 'fs';
import path from 'path';

const baseDir = process.cwd();
const oldDir = path.join(baseDir, 'src/components/BackToServices');
const newDir = path.join(baseDir, 'src/components/PageNavigation');

// Rename directory
if (fs.existsSync(oldDir)) {
  fs.renameSync(oldDir, newDir);
  fs.renameSync(path.join(newDir, 'BackToServices.jsx'), path.join(newDir, 'PageNavigation.jsx'));
  fs.renameSync(path.join(newDir, 'BackToServices.css'), path.join(newDir, 'PageNavigation.css'));
}

// Rewrite PageNavigation.jsx
const navJsxContent = `import { useNavigate } from "react-router-dom";
import "./PageNavigation.css";

const PageNavigation = ({ to = -1 }) => {
  const navigate = useNavigate();

  return (
    <div className="page-navigation-container">
      <button
        className="nav-btn back-btn"
        onClick={() => navigate(to)}
        aria-label="Go back"
      >
        <span className="nav-icon">←</span> Back
      </button>
      <button
        className="nav-btn home-btn"
        onClick={() => navigate("/")}
        aria-label="Go home"
      >
        <span className="nav-icon">🏠</span> Home
      </button>
    </div>
  );
};

export default PageNavigation;
`;
fs.writeFileSync(path.join(newDir, 'PageNavigation.jsx'), navJsxContent);

// Rewrite PageNavigation.css
const navCssContent = `.page-navigation-container {
  display: flex;
  gap: 15px;
  margin: 20px 0;
  padding: 0 5%;
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.nav-btn:hover {
  background: rgba(72, 202, 228, 0.2);
  border-color: #48cae4;
  transform: translateY(-2px);
}

.nav-icon {
  font-size: 1.2rem;
}

@media (max-width: 480px) {
  .nav-btn {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
}
`;
fs.writeFileSync(path.join(newDir, 'PageNavigation.css'), navCssContent);

// Traverse src/pages and replace BackToServices with PageNavigation
const pagesDir = path.join(baseDir, 'src/pages');
const replaceInDir = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('BackToServices')) {
        content = content.replace(/BackToServices/g, 'PageNavigation');
        fs.writeFileSync(fullPath, content);
      }
    }
  }
};
replaceInDir(pagesDir);
console.log("Renamed and updated all BackToServices to PageNavigation");
