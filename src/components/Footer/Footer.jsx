// // import styles from "./Footer.module.css"

// // function Footer () {
// //     return (
// //         <div id = "footer_section">
// //             <footer>
// //                 <p>© 2026 AMAN BHAYANI</p>
// //                 <div>
// //                     <a href="https://linkedin.com/in/aman-bhayani" target="_blank">LINKEDIN</a> · 
// //                     <a href="https://github.com/AmanCantCode" target="_blank"> GITHUB</a>
// //                     <p>amanbhayani608@gmail.com</p>
// //                 </div>
// //             </footer>
// //         </div>
// //     );
// // }

// // export default Footer   

// import styles from "./Footer.module.css";

// function Footer() {
    
//   return (
//     <div id="footer_section" className={styles.footer_wrapper}>
//       <footer className={styles.footer}>
//         {/* Left: copyright */}
//         <div className={styles.footer_left}>
//           <p>© 2026 AMAN BHAYANI</p>
//         </div>

//         {/* Center: social links */}
//         <div className={styles.footer_center}>
//           <a href="https://linkedin.com/in/aman-bhayani" target="_blank" rel="noopener noreferrer">
//             LinkedIn
//           </a>
//           <a href="https://github.com/AmanCantCode" target="_blank" rel="noopener noreferrer">
//             GitHub
//           </a>
          
//         </div>

//         {/* Right: contact */}
//         <div className={styles.footer_right}>
//           <p>amanbhayani608@gmail.com</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Footer;


import { useState } from "react";
import styles from "./Footer.module.css";

function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div id="footer_section" className={styles.footer_wrapper}>
      <footer className={styles.footer}>
        <div className={styles.footer_left}>
          <p>© 2026 AMAN BHAYANI</p>
        </div>

        <div className={styles.footer_center}>
          <a href="https://linkedin.com/in/aman-bhayani" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/AmanCantCode" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

        <div className={styles.footer_right}>
          <p
            onClick={() => handleCopy("amanbhayani608@gmail.com")}
            className={styles.copy_email}
            title="Click to copy email"
          >
            amanbhayani608@gmail.com
            <span className={copied ? styles.checkmarkVisible : styles.checkmark}>
              ✔
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
