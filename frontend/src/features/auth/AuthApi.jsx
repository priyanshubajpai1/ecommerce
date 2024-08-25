import { axiosi } from '../../config/axios';

export const signup = async (cred) => {
    try {
        const res = await axiosi.post("auth/signup", cred);
        return res.data;
    } catch (error) {
        const message = error.response?.data || "An unexpected error occurred during signup";
        throw new Error(message);
    }
};

export const login = async (cred) => {
    try {
        const res = await axiosi.post("auth/login", cred);
        return res.data;
    } catch (error) {
        const message = error.response?.data || "An unexpected error occurred during login";
        throw new Error(message);
    }
};

export const verifyOtp = async (cred) => {
    try {
        const res = await axiosi.post("auth/verify-otp", cred);
        return res.data;
    } catch (error) {
        const message = error.response?.data || "An unexpected error occurred during OTP verification";
        throw new Error(message);
    }
};

export const resendOtp = async (cred) => {
    try {
        const res = await axiosi.post("auth/resend-otp", cred);
        return res.data;
    } catch (error) {
        const message = error.response?.data || "An unexpected error occurred during OTP resend";
        throw new Error(message);
    }
};

export const forgotPassword = async (cred) => {
    try {
        const res = await axiosi.post("auth/forgot-password", cred);
        return res.data;
    } catch (error) {
        const message = error.response?.data || "An unexpected error occurred during password reset";
        throw new Error(message);
    }
};

export const resetPassword = async (cred) => {
    try {
        const res = await axiosi.post("auth/reset-password", cred);
        return res.data;
    } catch (error) {
        const message = error.response?.data || "An unexpected error occurred during password reset";
        throw new Error(message);
    }
};

export const checkAuth = async () => {
    try {
        const res = await axiosi.get("auth/check-auth");
        return res.data;
    } catch (error) {
        const message = error.response?.data || "An unexpected error occurred while checking authentication";
        throw new Error(message);
    }
};

export const logout = async () => {
    try {
        const res = await axiosi.get("auth/logout");
        return res.data;
    } catch (error) {
        const message = error.response?.data || "An unexpected error occurred during logout";
        throw new Error(message);
    }
};
