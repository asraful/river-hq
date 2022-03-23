package com.river.core.hr.service.person;

import com.river.core.hr.data.EmployeeRepository;
import com.river.core.hr.entity.person.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    private EmployeeRepository repository;

    @Autowired
    private void employeeRepository(EmployeeRepository employeeRepository) {
        this.repository = employeeRepository;
    }

    public void add(Employee employee) {
        repository.save(employee);
    }

}
