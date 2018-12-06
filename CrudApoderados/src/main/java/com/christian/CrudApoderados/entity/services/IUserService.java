package com.christian.CrudApoderados.entity.services;

import java.util.List;
import com.christian.CrudApoderados.entity.models.AppUser;

public interface IUserService {
	public AppUser get(long id_user);

	public List<AppUser> findUserByUsername(String username);

	public List<AppUser> getAll();

	public void post(AppUser AppUser);

	public void put(AppUser AppUser, long id_user);

	public void delete(long id_user);
}
