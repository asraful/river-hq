package com.river.core.hr.entity.workday;

import com.river.core.hr.entity.BaseEntity;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity()
@Table(name = "attendances")
public class Attendance extends BaseEntity {
    private Date date;
    private boolean present;
    private boolean late;
    private double lateTime;
    private boolean onLeave;
    private Date leaveFrom;
    private Date getLeaveTo;
    private boolean isLeaveApproved;
}
