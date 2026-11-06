import { useNavigate } from 'react-router-dom';

function Button({text,to}) {

    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(to)}>{text}</button>
    )
}

export default Button; 