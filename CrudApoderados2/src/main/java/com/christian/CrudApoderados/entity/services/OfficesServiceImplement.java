package com.christian.CrudApoderados.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.christian.CrudApoderados.entity.dao.IOfficesDao;
import com.christian.CrudApoderados.entity.models.Offices;
@Service
public class OfficesServiceImplement implements IOfficesService {
	@Autowired
	private IOfficesDao OfficesDao;
	@Override
	public List<Offices> getAll() {
	return (List<Offices>) OfficesDao.findAll();
	}

	@Override
	public Offices get(long Id_Oficina) {
		return OfficesDao.findById(Id_Oficina).get();
	}

	@Override
	public void post(Offices offices) {
		OfficesDao.save(offices);
	}

	@Override
	public void put(Offices offices, long Id_Oficina) {
		OfficesDao.findById(Id_Oficina).ifPresent((x)->{
			offices.setId_Oficinas(Id_Oficina);
			OfficesDao.save(offices);
		});
	}

	@Override
	public void delete(long Id_Oficina) {
		OfficesDao.deleteById(Id_Oficina);
		
	}

}
