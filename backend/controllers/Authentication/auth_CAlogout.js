const logout = (req, res) =>{
     try {
        res.clearCookie("token").status(200).json({msg:"logout successfully"})
     } catch (error) {
        res.status(400).json({msg:"error || logout controllers"})
     }
}


export default logout;