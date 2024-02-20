export default function Alert(props) {

    const capitalize = (word) => {
        const newWord = word.toLowerCase();
        return newWord.charAt(0).toUpperCase() + newWord.slice(1);
    }

    return (
        <div style={{ height: '50px' }}>
            {
                props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}
                </div>
            }
        </div>
    );
}