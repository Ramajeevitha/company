import "./MernService.css";
import BackToServices from "../components/BackToServices";
import Plasma from "../components/Plasma";

const Dsa = () => {
  return (
    <section className="mern">
      <div className="mern-bg">
             <Plasma
               color="#48cae4"
               speed={1}
               direction="forward"
               scale={1}
               opacity={1}
               mouseInteractive={false}
             />
           </div>

      <div className="mern-overlay">
        <BackToServices />

        <h1 className="mern-title">DSA Training & Problem Solving</h1>

        <p className="mern-subtitle">
          Strengthening problem-solving skills with Data Structures and
          Algorithms training designed to improve coding efficiency, logic, and
          interview readiness.
        </p>

        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Cover</h3>
            <ul>
              <li>Arrays, Strings & Linked Lists</li>
              <li>Stacks, Queues & Hashing</li>
              <li>Trees, Graphs & Traversals</li>
              <li>Recursion, Backtracking & Dynamic Programming</li>
              <li>Sorting, Searching & Greedy Algorithms</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Our DSA Approach</h3>
            <ul>
              <li>Concept-based Learning</li>
              <li>Step-by-step Problem Solving</li>
              <li>Time & Space Complexity Analysis</li>
              <li>Interview-focused Coding Practice</li>
              <li>Competitive Programming Techniques</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dsa;
