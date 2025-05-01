package org.example.service.interf;

import org.example.dto.LoginRequest;
import org.example.dto.Response;
import org.example.dto.UserDto;
import org.example.entity.User;

public interface UserService {
    Response registerUser(UserDto registrationRequest);
    Response loginUser(LoginRequest loginRequest);
    Response getAllUsers();
    User getLoginUser();
    Response getUserInfoAndOrderHistory();
}