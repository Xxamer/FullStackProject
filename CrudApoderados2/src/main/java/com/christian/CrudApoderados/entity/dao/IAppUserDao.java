package com.christian.CrudApoderados.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.christian.CrudApoderados.entity.models.AppUser;

public interface IAppUserDao extends CrudRepository<AppUser, Long>{
	public AppUser findUserByUsername(String username);
}