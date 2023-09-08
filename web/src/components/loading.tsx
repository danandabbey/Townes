import { useState, useEffect} from 'react'

const Loading = (() => {
    try {
        const [msg, setState]: any = useState('');
        useEffect(() => {
            let n = 0;
            let interval = setInterval(() => {
                n < 10 ?
                    (setState((msg: any) => msg + '.'), n++) : clearInterval(interval)
            }, 500);
            return (() =>
                clearInterval(interval));
        }, []);
        return (
            <div className="loading">
                {msg ? (<p>{msg}</p>) : null}
            </div>
        );
    } catch (error) {
        console.log(error)
    };
});

export default Loading