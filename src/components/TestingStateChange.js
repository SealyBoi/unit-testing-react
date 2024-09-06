import {useEffect, useState} from 'react'

const TestingStateChange = () => {
    const data = [
        {
            "id": 1,
            "name": 'kyle'
        }, {
            "id": 2,
            "name": 'jeff'
        }, {
            "id": 3,
            "name": 'kevin'
        },
    ]
    const [loaded, setLoaded] = useState(false);
    const [toggleTextVisible, setToggleTextVisible] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [elements, setElements] = useState(data);

    useEffect(() => {
        setLoaded(true)
    }, [])

    return (
        <div>
            {loaded && <h3> Page Loaded </h3>}
            {toggleTextVisible && <p>Text visible</p>}
            <button onClick={() => { setToggleTextVisible(!toggleTextVisible) }} disabled={btnDisabled}>
                Toggle Text
            </button>
            <button onClick={() => { setBtnDisabled(!btnDisabled)}}>
                Toggle button disabled
            </button>
            <h3> List </h3>
            {elements.map(item => (
                <div key={item.id} data-testid="record">
                    {item.id}: {item.name}
                </div>
            ))}
            <button onClick={() => {
                setElements([...elements, {
                    id: 4,
                    name: 'abhinav'
                }])
            }}> Add to list </button>
            <button onClick={() => {
                setElements(elements.filter(item => item.id != 2))
            }}>Remove from list</button>
        </div>
    )
}

export default TestingStateChange