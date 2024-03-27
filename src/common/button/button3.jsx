
import styles from "@/common/button/button.module.css"
function Button(props) {
    return (
      
<button type="submit" className={styles.button3} role="button"><span className={styles.text3}>{props.btn_text}</span><span className={styles.text3}>{props.btn_text}</span></button>


    )
}
export default Button;