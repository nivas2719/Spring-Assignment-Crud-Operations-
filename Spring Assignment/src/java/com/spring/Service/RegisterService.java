package com.spring.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.andromeda.commons.model.Response;
import com.spring.DAO.RegisterDAO;

import com.spring.Model.RegisterForm;


@Service
public class RegisterService {
	
	Response response = new Response();

	@Autowired
	private RegisterDAO registerDAO;

	public Response add(RegisterForm registerformModel) {
		response.setSuccessful(false);
		registerDAO.add(registerformModel);
		response.setSuccessful(true);
		response.setResponseObject(registerformModel);
		return response;
	}

	public Response getAll() {
		response.setSuccessful(false);
		List<RegisterForm> RegisterDetails = registerDAO.getAll();
		response.setSuccessful(true);
		response.setResponseObject(RegisterDetails);
		return response;
	}

	public Response remove(String username)
	{
		response.setSuccessful(false);
		registerDAO.remove(username);
		response.setSuccessful(true);
		response.setResponseObject(username);
		return response;
	}

	public Response getById(String username)
	{
		response.setSuccessful(false);
		RegisterForm singleuserdetails = registerDAO.getById(username);
		response.setSuccessful(true);
		response.setResponseObject(singleuserdetails);
		return response;
	}

	public Response updateData(RegisterForm registerform)
	{
		response.setSuccessful(false);
		registerDAO.updateData(registerform);
		response.setSuccessful(true);
		response.setResponseObject(registerform);
		return response;
	}
	

}
