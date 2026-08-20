import fs from 'fs';
import path from 'path';

const files = [
  'src/pages/BackendService/BackendService.jsx',
  'src/pages/CoursesPage/CoursesPage.jsx',
  'src/pages/DesktopSupport/DesktopSupport.jsx',
  'src/pages/FrontendService/FrontendService.jsx',
  'src/pages/IoTService/IoTService.jsx',
  'src/pages/LogoPosterService/LogoPosterService.jsx',
  'src/pages/MernService/MernService.jsx',
  'src/pages/PCBService/PCBService.jsx',
  'src/pages/PlacementTraining/PlacementTraining.jsx',
  'src/pages/SqlService/SqlService.jsx',
  'src/pages/TechnicalSupport/TechnicalSupport.jsx',
  'src/pages/UiUxService/UiUxService.jsx'
];

for (const file of files) {
  const p = path.join(process.cwd(), file);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(/const navigate = useNavigate\(\);\r?\n?/g, '');
    content = content.replace(/import \{\s*useNavigate\s*\} from "react-router-dom";\r?\n?/g, '');
    content = content.replace(/import \{\s*useNavigate,\s*useLocation\s*\} from "react-router-dom";/g, 'import { useLocation } from "react-router-dom";');
    fs.writeFileSync(p, content);
  }
}
console.log("Fixed lint issues in 12 files.");
