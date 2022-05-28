package com.river.core.hr.entity.config;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "configuration")
@Getter
@Setter
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Configuration {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String key;

    private String value;

    private ConfigType configType;
}