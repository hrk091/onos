/*
 * Copyright 2015-present Open Networking Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.onosproject.pcepio.protocol;

import org.jboss.netty.buffer.ChannelBuffer;
import org.onosproject.pcepio.exceptions.PcepParseException;

/**
 * Abstraction of an entity providing PCEP Message Writer.
 */
public interface PcepMessageWriter<T> {

    /**
     * Writes the Objects of the PCEP Message into Channel Buffer.
     *
     * @param bb Channel Buffer
     * @param message PCEP Message
     * @throws PcepParseException while writing PCEP message.
     */
    void write(ChannelBuffer bb, T message) throws PcepParseException;
}
