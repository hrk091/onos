/*
 * Copyright ${year}-present Open Networking Foundation
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

import { NgModule } from '@angular/core';
import { Gui2FwLibModule } from 'gui2-fw-lib';
import { ${appNameCap}${appNameEnd}Component } from './${artifactId}/${artifactId}.component';
import { ${appNameCap}${appNameEnd}RoutingModule } from './${artifactId}-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
    declarations: [${appNameCap}${appNameEnd}Component, WelcomeComponent],
    imports: [
        ${appNameCap}${appNameEnd}RoutingModule,
        Gui2FwLibModule
    ],
    exports: [${appNameCap}${appNameEnd}Component, WelcomeComponent]
})
export class ${appNameCap}${appNameEnd}GuiLibModule { }