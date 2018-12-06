package com.christian.CrudApoderados.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.christian.CrudApoderados.entity.dao.IApoderadosDao;
import com.christian.CrudApoderados.entity.models.Apoderados;

@Service
public class ApoderadosServiceImplement implements IApoderadosService {
@Autowired
private IApoderadosDao ApoderadosDao;
	@Override
	public List<Apoderados> getAll() {
		return (List<Apoderados>) ApoderadosDao.findAll();
	}

	@Override
	public Apoderados get(long id_Apoderados) {
		return ApoderadosDao.findById(id_Apoderados).get();
	}

	@Override
	public void post(Apoderados apoderados) {
		ApoderadosDao.save(apoderados);
		
	}

	@Override
	public void put(Apoderados apoderados, long id_Apoderados) {
		ApoderadosDao.findById(id_Apoderados).ifPresent((x)->{
			apoderados.setId_Apoderado(id_Apoderados);
			ApoderadosDao.save(apoderados);
		});
	}

	@Override
	public void delete(long id_Apoderados) {
		ApoderadosDao.deleteById(id_Apoderados);
		
	}

}
