package com.christian.CrudApoderados.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.christian.CrudApoderados.entity.dao.ISignDao;
import com.christian.CrudApoderados.entity.models.Sign;

@Service
public class SignServiceImplement implements ISignService {
	@Autowired
	private ISignDao SignDao;

	@Override
	public List<Sign> getAll() {
		return (List<Sign>) SignDao.findAll();
	}

	@Override
	public Sign get(long Id_Firma) {
		return SignDao.findById(Id_Firma).get();
	}

	@Override
	public void post(Sign sign) {
		SignDao.save(sign);

	}

	@Override
	public void put(Sign sign, long Id_Firma) {
		SignDao.findById(Id_Firma).ifPresent((x)->{
			sign.setId_Firma(Id_Firma);
			SignDao.save(sign);
		});
	}

	@Override
	public void delete(long id_Firma) {
		SignDao.deleteById(id_Firma);

	}

}
