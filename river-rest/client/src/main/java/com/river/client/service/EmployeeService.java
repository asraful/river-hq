package com.river.client.service;

import com.river.client.dto.EmployeeDetail;

public interface EmployeeService {
    public void addNewEmployeeDetail(EmployeeDetail employeeDetail);

    public void updateEmployeeDetail(EmployeeDetail employeeDetail);

    public void deleteEmployeeDetail(String id);
}
