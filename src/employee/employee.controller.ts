import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ApiForbiddenResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { EmployeeEntity } from './entities/employee.entity';

@ApiTags('Employee')
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @ApiOkResponse({ type: EmployeeEntity })
  @ApiForbiddenResponse({ description: 'Acesso negado!', isArray: true })
  @Get()
  findAll(@Query() { page, totalPerPage }) {
    return this.employeeService.findAll({
      page: +page,
      totalPerPage: +totalPerPage,
    });
  }

  @ApiOkResponse({ type: EmployeeEntity })
  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(+id);
  }

  @ApiOkResponse({ type: EmployeeEntity })
  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeeService.update(+id, updateEmployeeDto);
  }

  @ApiForbiddenResponse({ description: 'Acesso negado!' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }
}
