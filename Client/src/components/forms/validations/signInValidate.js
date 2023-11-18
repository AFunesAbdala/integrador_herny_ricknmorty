export const ValidateEmail = (userData) => {

    const emailREGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ // 

    if (!userData.email) {
        return "Empty Email"
    } else {
        if (emailREGEX.test(userData.email) && userData.email.length <= 35) {
            return ""
        } else {
            return "Invalid Email"
        };
    }
};

export const ValidatePass = (userData) => {

    const passwordREGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ // Minimo 8 caracteres, 1 Letra y 1 Numero

    if (!userData.password) {
        return "Empty Password"
    } else {
        if (passwordREGEX.test(userData.password)) {
            return ""
        } else {
            return "Password must have 8 characters, at least 1 number and 1 letter."
        };
    }
}