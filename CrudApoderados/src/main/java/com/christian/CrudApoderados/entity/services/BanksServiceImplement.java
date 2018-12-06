package com.christian.CrudApoderados.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.christian.CrudApoderados.entity.dao.IBanksDao;
import com.christian.CrudApoderados.entity.models.Banks;
@Service
public class BanksServiceImplement implements IBanksService {
	@Autowired
	private IBanksDao BanksDao;

	@Override
	public List<Banks> getAll() {
		return (List<Banks>) BanksDao.findAll();
	}

	@Override
	public Banks get(long id_Banco) {
		return BanksDao.findById(id_Banco).get();
	}

	@Override
	public void post(Banks banks) {
		BanksDao.save(banks);

	}

	@Override
	public void put(Banks banks, long Id_banco) {
		BanksDao.findById(Id_banco).ifPresent((x)->{
			banks.setId_Banco(Id_banco);
			BanksDao.save(banks);
		});

	}

	@Override
	public void delete(long Id_banco) {
		BanksDao.deleteById(Id_banco);
		
	}

}
