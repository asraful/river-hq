package com.river.core.hr.entity.person;

import com.river.core.hr.entity.BaseEntity;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "work_detail")
@NoArgsConstructor
public class WorkDetail extends BaseEntity {
    private String positionName;
    private Date joiningDate;
    private Date releaseDate;
    private String feedback;
}
