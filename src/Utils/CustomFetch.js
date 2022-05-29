
function CustomFetch(time, tarea) {
    return new Promise((resolve) => {
            setTimeout(() => {
                resolve(tarea);
            }, time);
        }
    )
}

export default CustomFetch;