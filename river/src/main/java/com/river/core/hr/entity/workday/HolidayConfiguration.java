package com.river.core.hr.entity.workday;

import com.river.core.hr.entity.BaseEntity;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "holiday_config")
public class HolidayConfiguration extends BaseEntity {
    private Date holidayFrom;
    private Date holidayTo;
    private String description;
}
