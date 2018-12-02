package com.christian.CrudApoderados.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.christian.CrudApoderados.entity.dao.IClientsSignedDao;
import com.christian.CrudApoderados.entity.models.ClientsSigned;
@Service
public class ClientsSignedServiceImplement implements IClientsSignedService {
	@Autowired
	private IClientsSignedDao ClientsSignedDao;
	@Override
	public List<ClientsSigned> getAll() {
		return (List<ClientsSigned>) ClientsSignedDao.findAll();
	}

	@Override
	public ClientsSigned getBySign(long Id_Firma) {
		return ClientsSignedDao.findById(Id_Firma).get();
	}

	@Override
	public ClientsSigned getByClient(long Id_Cliente) {
		return ClientsSignedDao.findById(Id_Cliente).get();
	}

	@Override
	public void post(ClientsSigned clientssigned) {
		ClientsSignedDao.save(clientssigned);
		
	}

	@Override
	public void putSign(ClientsSigned clientssigned, long Id_Firma) {
		ClientsSignedDao.findById(Id_Firma).ifPresent((x)->{
			clientssigned.setId_Firma(Id_Firma);
			ClientsSignedDao.save(clientssigned);
		});
		
	}

	@Override
	public void putClient(ClientsSigned clientssigned, long Id_Cliente) {
		ClientsSignedDao.findById(Id_Cliente).ifPresent((x)->{
			clientssigned.setId_Firma(Id_Cliente);
			ClientsSignedDao.save(clientssigned);
		});
		
	}

	@Override
	public void deleteByIdSign(long Id_Firma) {
		ClientsSignedDao.deleteById(Id_Firma);
		
	}

	@Override
	public void deleteByIdClient(long Id_Cliente) {
		ClientsSignedDao.deleteById(Id_Cliente);
		
	}

}
