const CustomError = ((props:any) => {
    const style: any = {
        'display': 'flex',
        'justifyContent': 'center',
        'fontSize': '2em',
        'textAlign': 'center'
    };
    const { name } = props.name
    const { error } = props.error
    return (
        < div style={style} >
            <div>{name}</div>
            <div >{error}</div>
        </div>
    )
});

export default CustomError;