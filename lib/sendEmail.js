const sendEmail = async (email)=>{
    await new Promise((resolve)=>{
        setTimeout(resolve,5000) // 5000 = 5s
    })

    console.log("Task Completed")
}

export default sendEmail