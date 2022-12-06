const { useEffect } = require("react")

const useTitle = title =>{

    useEffect(()=>{

        document.title = `${title} - ROYAL BOOK`;

    },[title])
}

export default useTitle;