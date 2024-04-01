package com.spring.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.andromeda.commons.model.Response;
import com.spring.DAO.UserDAO;
import com.spring.Model.User;

@Service
public class UserService {

	Response response = new Response();

	@Autowired
	private UserDAO userDAO;

	public Response add(User userModel) {
		response.setSuccessful(false);
		userDAO.add(userModel);
		response.setSuccessful(true);
		response.setResponseObject(userModel);
		return response;
	}

	public Response getAll() {
		response.setSuccessful(false);
		List<User> userdetails = userDAO.getAll();
		response.setSuccessful(true);
		response.setResponseObject(userdetails);
		return response;
	}

	public Response remove(String name)
	{
		response.setSuccessful(false);
		userDAO.remove(name);
		response.setSuccessful(true);
		response.setResponseObject(name);
		return response;
	}

	public Response getById(String name)
	{
		response.setSuccessful(false);
		User singleuserdetails = userDAO.getById(name);
		response.setSuccessful(true);
		response.setResponseObject(singleuserdetails);
		return response;
	}

	public Response updateData(User user)
	{
		response.setSuccessful(false);
		userDAO.updateData(user);
		response.setSuccessful(true);
		response.setResponseObject(user);
		return response;
	}
	

}
