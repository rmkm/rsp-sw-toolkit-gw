/*
 * Copyright (C) 2018 Intel Corporation
 * SPDX-License-Identifier: BSD-3-Clause
 */
package com.intel.rfid.api.upstream;

import com.intel.rfid.api.JsonRequest;

public class SensorGetStateRequest extends JsonRequest {

    public static final String METHOD_NAME = "sensor_get_state";

    public class Params {
        public String device_id;
    }

    public Params params = new Params();

    public SensorGetStateRequest() {
        method = METHOD_NAME;
    }

}
