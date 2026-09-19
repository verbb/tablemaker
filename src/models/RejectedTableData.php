<?php
namespace verbb\tablemaker\models;

final class RejectedTableData extends TableMakerData
{
    public function __construct(private array $_validationErrors)
    {
        parent::__construct();
    }

    public function validationErrors(): array
    {
        return $this->_validationErrors;
    }
}
