package com.christian.CrudApoderados.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.christian.CrudApoderados.entity.dao.IAppUserDao;
import com.christian.CrudApoderados.entity.models.AppUser;
@Service
public class UserServiceImplement implements IUserService {
	@Autowired
	private IAppUserDao AppUserDao;
	@Override
	public List<AppUser> getAll() {
		return (List<AppUser>) AppUserDao.findAll();
	}

	@Override
	public void post(AppUser AppUser) {
		AppUserDao.save(AppUser);
		
	}

	@Override
	public void put(AppUser AppUser, long id) {
		AppUserDao.findById(id).ifPresent((x) -> {
			AppUser.setId(id);
			AppUserDao.save(AppUser);
		});
		
	}

	@Override
	public void delete(long id) {
		AppUserDao.deleteById(id);
		
	}

	@Override
	public AppUser get(long id) {
		return AppUserDao.findById(id).get();
	}

	@Override
	public List<AppUser> findUserByUsername(String username) {
		
		return null;
	}

}
