package com.christian.CrudApoderados.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.christian.CrudApoderados.entity.dao.IAppUserDao;
import com.christian.CrudApoderados.entity.models.AppUser;
import com.christian.CrudApoderados.entity.services.IUserService;
@Service
public class UserServiceImplement implements IUserService {
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
	@Autowired
	private IAppUserDao AppUserDao;
	@Override
	public List<AppUser> getAll() {
		return (List<AppUser>) AppUserDao.findAll();
	}

	@Override
	public void post(AppUser AppUser) {
		String password = passwordEncoder.encode(AppUser.getPassword());
		AppUser.setPassword(password);
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
