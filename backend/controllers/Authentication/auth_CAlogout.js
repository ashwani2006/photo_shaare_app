const logout = (req, res) =>{
     try {
        res.clearCookie("token", { httpOnly: true, secure: false, sameSite: "None" }).status(200).json({msg:"logout successfully"})

     } catch (error) {
        res.status(400).json({msg:"error || logout controllers"})
     }
}


export default logout;
