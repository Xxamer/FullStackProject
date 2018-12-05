package com.christian.CrudApoderados.entity.services;

import java.util.List;
import com.christian.CrudApoderados.entity.models.AppUser;

public interface IUserService {
	public AppUser get(long id);

	public List<AppUser> findUserByUsername(String username);

	public List<AppUser> getAll();

	public void post(AppUser AppUser);

	public void put(AppUser AppUser, long id);

	public void delete(long id);
}
